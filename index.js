const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

 const BatteryBatches = [4, 5, 3, 4, 4, 6, 7, 8, 5, 6];
 const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);
console.log(totalBatteries);
