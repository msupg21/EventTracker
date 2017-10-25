package data;

import java.util.List;

import entities.ChipotleOrder;

public interface EventTrackerDAO {
	public List<ChipotleOrder> index();
	public ChipotleOrder show(int id);
	public ChipotleOrder create(ChipotleOrder order);
	public ChipotleOrder update(int id, ChipotleOrder quiz);
	public boolean destroy(int id);
}
