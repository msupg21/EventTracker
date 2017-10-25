package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.EventTrackerDAO;
import entities.ChipotleOrder;

@RestController
public class EventTrackerController {
	
//	 @RequestMapping(path = "ping", method = RequestMethod.GET)
//	 public String ping() {
//	 return "pong";
//	 }
	
	@Autowired
	EventTrackerDAO etd;
	
	@RequestMapping(path = "order", method = RequestMethod.GET)
	public List<ChipotleOrder> index() {
		return etd.index();
	}
	
	@RequestMapping(path = "order/{id}", method = RequestMethod.GET)
	public ChipotleOrder show(@PathVariable int id) {
		return etd.show(id);
	}
	

	@RequestMapping(path = "order", method = RequestMethod.POST)
	public ChipotleOrder create(@RequestBody String json) {
		System.out.println(json);
		ObjectMapper mapper = new ObjectMapper();
		ChipotleOrder co = null;
		try {
			co = mapper.readValue(json, ChipotleOrder.class);
			return etd.create(co);
		} catch (Exception e) {
			e.printStackTrace();
			return co;
		}
	}
	
	@RequestMapping(path = "orders/{id}", method = RequestMethod.PUT)
	public ChipotleOrder update(@PathVariable int id, @RequestBody String json) {
		ObjectMapper mapper = new ObjectMapper();
		ChipotleOrder co = null;
		try {
			co = mapper.readValue(json, ChipotleOrder.class);
			return etd.update(id, co);
		} catch (Exception e) {
			e.printStackTrace();
			return co;
		}
	}
	
	@RequestMapping(path = "orders/{id}", method = RequestMethod.DELETE)
	public boolean destroy(@PathVariable int id) {
		return etd.destroy(id);
	}
	

}
