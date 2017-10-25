package Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "chipotle_order")
public class ChipotleOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	@Column(name = "number_of_bowls")
	private int numberOfBowls;
	

	
	@Column(name = "double_meat")
	private int numberOfTimesDM;
	
	@Column(name = "amount_spent")
	private int amountSpent;
//	
//	@Column(name = "did_shit_pants")
//	private boolean didShitPants;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getNumberOfBowls() {
		return numberOfBowls;
	}

	public void setNumberOfBowls(int numberOfBowls) {
		this.numberOfBowls = numberOfBowls;
	}


	public int getNumberOfTimesDM() {
		return numberOfTimesDM;
	}

	public void setNumberOfTimesDM(int numberOfTimesDM) {
		this.numberOfTimesDM = numberOfTimesDM;
	}

	public int getAmountSpent() {
		return amountSpent;
	}

	public void setAmountSpent(int amountSpent) {
		this.amountSpent = amountSpent;
	}

//	public boolean isDidShitPants() {
//		return didShitPants;
//	}
//
//	public void setDidShitPants(boolean didShitPants) {
//		this.didShitPants = didShitPants;
//	}
	
	
	
	
	
}


