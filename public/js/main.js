const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name')
const temp_real_value = document.getElementById('temp_real_value')
const temp_status = document.getElementById('temp_status')
const datahide = document.querySelector('.middle_layer')

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value
    if (cityVal === "") {
        city_name.innerHTML = `Please write the name before search`
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=fa5d7a7128db1cba585f8682115dc5e9`;
            const response = await fetch(url);
            data = await response.json()
            const arrData = [data]

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.temp
            const tempMode = arrData[0].weather[0].main;
            if (tempMode == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            } else if (tempMode == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            } else if (tempMode == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }
            datahide.classList.remove('data_hide');
        } catch {
            city_name.innerHTML = `Please enter the city name properly`
            datahide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener('click', getInfo)