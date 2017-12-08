let store = {drivers: [], passengers: [], trips: []};


let dId = 0;
class Driver{
  constructor(name){
    this.name = name;
    this.id = ++dId;

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip=>{
      return trip.driverId = this.id
    })
  }
  passengers(){
    return store.passengers.filter(passenger=>{
      return passenger.driverId = this.id
    })
  }
}

pId = 0;
class Passenger{
  constructor(name){
    this.name = name;
    this.id = ++pId;

    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter(trip=>{
      return trip.passengerId = this.id
    })
  }
  drivers(){
    return store.drivers.filter(driver=>{
      return driver.passengerId = this.id
    })
  }
}

tId = 0;

class Trip{
  constructor(driver, passenger){
    this.id = ++tId;

    if (driver){
      this.driverId = driver.id;
    }
    if (passenger){
      this.passengerId = passenger.id;
    }

    store.trips.push(this);
  }


  passenger(){
    return store.passengers.find(function(passenger){
      return passenger.id === this.passengerId
    }.bind(this))
  }

  driver(){
    return store.drivers.find(function(driver){
      return driver.id === this.driverId
    }.bind(this))
  }


}
