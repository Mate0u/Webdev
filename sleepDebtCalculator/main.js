function getSleepHours(day) {
	day = day.toLowerCase();
	switch (day) {
		case 'monday':
			hours = 12;
			break;
		case 'tuesday':
			hours = 5;
			break;
		case 'wednesday':
			hours = 5;
			break;
		case 'thursday':
			hours = 5;
			break;
		case 'friday':
			hours = 5;
			break;
		case 'saturday':
			hours = 2;
			break;
		case 'sunday':
			hours = 3;
			break;
		default:
			break;
	}
	return hours;
}

function getActualSleepHours() {

	return (getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'));

}

function getIdealSleepHours(hours) {
	const idealHours = 7;
	return idealHours * hours;

}

function calculateSleepDebt (hours) {
	const actualSleepHours = getActualSleepHours();
	const idealSleepHours = getIdealSleepHours(hours);

	if(actualSleepHours === idealSleepHours){
		console.log('perfect amount of sleep');
	} else if(actualSleepHours > idealSleepHours){
		console.log('user got more sleep than needed');
	} else if(actualSleepHours < idealSleepHours){
		console.log('user should get some rest');
	} else{
		console.log('Error');
	}

}
calculateSleepDebt(2);