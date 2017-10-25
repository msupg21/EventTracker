package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.ChipotleOrder;

@Repository
@Transactional
public class EventTrackerDAOImpl implements EventTrackerDAO {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<ChipotleOrder> index() {
		String query = "SELECT o FROM ChipotleOrder o";
		return em.createQuery(query, ChipotleOrder.class)
				 .getResultList();		
	}

	@Override
	public ChipotleOrder show(int id) {
		String query = "SELECT o FROM ChipotleOrder o WHERE o.id = :id";
		return em.createQuery(query, ChipotleOrder.class)
				 .setParameter("id", id)
				 .getResultList()
				 .get(0);	
	}

	@Override
	public ChipotleOrder create(ChipotleOrder order) {
		em.persist(order);
		em.flush();
		return order;
	}

	@Override
	public ChipotleOrder update(int id, ChipotleOrder order) {
		ChipotleOrder update = em.find(ChipotleOrder.class, id);
		update.setName(order.getName());
		update.setNumberOfBowls(order.getNumberOfBowls());
		update.setAmountSpent(order.getAmountSpent());
		update.setNumberOfTimesDM(order.getNumberOfTimesDM());
		return update;
	}

	@Override
	public boolean destroy(int id) {
		try {
			ChipotleOrder order = em.find(ChipotleOrder.class, id);
			em.remove(order);
			
			if(em.find(ChipotleOrder.class, id) == null){
				return true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

}
