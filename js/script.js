window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('hide-preloader');
});

const creatCars = (() => {
    // car data
    const cars = [];
    // car class
    class Car {
        constructor(make, country, img, special, model, price, type, trans, gas) {
            this.make = make;
            this.country = country;
            this.img = img;
            this.special = special;
            this.model = model;
            this.price = price;
            this.type = type;
            this.trans = trans;
            this.gas = gas;
        }
    };

    function makeCar(make, country, img = 'img/car-default.jpeg', special = true, model = 'new model', price = '10000', type = 'sedan', trans = 'automatic', gas = '50') {
        const car = new Car(make, country, img, special, model, price, type, trans, gas);

        cars.push(car);
    };

    function produceCars() {
        makeCar('chevy', 'american');
        makeCar('mercedes', 'german', 'img/car-german-1.jpeg', true);
        makeCar('bmw', 'german', 'img/car-german-2.jpeg');
        makeCar('mercedes', 'german', 'img/car-german-3.jpeg', false, 'some model');
        makeCar('mercedes', 'german', 'img/car-german-4.jpeg', undefined, 'other model');
        makeCar('mercedes', 'german', 'img/car-german-5.jpeg', false);
        makeCar('chevy', 'american', 'img/car-american-1.jpeg', false);
        makeCar('chevy', 'american', 'img/car-american-2.jpeg');
        makeCar('chevy', 'american', 'img/car-american-3.jpeg', false);
        makeCar('chevy', 'american', 'img/car-american-4.jpeg', false);
        makeCar('chevy', 'american', 'img/car-american-5.jpeg', false);
    }
    produceCars()
    // console.log(cars);

    // special cars

    let specialCars = cars.filter(car => car.special === true);

    // console.log(specialCars);

    return {
        cars,
        specialCars
    }
})();

const displaySplCars = (creatCars => {
    let splCarsList = creatCars.specialCars;

    let info = document.querySelector('.featured-info');
    let data = '';
    document.addEventListener('DOMContentLoaded', () => {
        info.innerHTML = '';

        splCarsList.forEach(car => {
            data += `
            <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
            <span data-img='${car.img}' class="featured-icon mr-2">
              <i class="fas fa-car"></i>
            </span>
            <h5 class="font-weight-bold mx-1">${car.make}</h5>
            <h5 class="mx-1">${car.model}</h5>
          </div>`;
        });

        info.innerHTML = data;
    });

    info.addEventListener('click', e => {

        if (e.target.parentElement.parentElement.classList.contains('featured-icon')) {
            let img = e.target.parentElement.parentElement.dataset.img;

            let featuredPhoto = document.querySelector('.featured-photo');

            featuredPhoto.src = `${img}`;
        };
        if (e.target.parentElement.classList.contains('featured-item')) {
            let img2 = (e.target.parentElement.children[0].dataset.img);

            let featuredPhoto2 = document.querySelector('.featured-photo');

            featuredPhoto2.src = `${img2}`;
        }
    })
})(creatCars);

const displayAllCars = (creatCars => {
    let listAllCars = creatCars.cars;
    let inventory = document.querySelector('.inventory-car-collection');
    let data = '';
    document.addEventListener('DOMContentLoaded', () => {
        inventory.innerHTML = '';

        listAllCars.forEach(car => {
            data += `
            <!-- ?single car -->
            <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
              <div class="card car-card">
                <img src="${car.img}" alt="" class="card-img-top car-img">
                <!-- ?card body -->
                <div class="card-body">
                  <div class="car-info d-flex justify-content-between">
                    <!-- *fitst flex child -->
                    <div class="car-text text-uppercase">
                      <h6 class="font-weight-bold">${car.make}</h6>
                      <h6>${car.model}</h6>
                    </div>
                    <!-- *second flex child -->
                    <h5 class="py-2 px-3 align-self-center car-value">
                      $ <span class="car-price">${car.price}</span>
                    </h5>
                  </div>
                </div>
                <!-- !end card body -->
                <div class='card-footer text-capitalize d-flex justify-content-between'>
                  <p>
                    <spna><i class="fas fa-car"></i></spna>${car.type}
                  </p>
                  <p>
                    <spna><i class="fas fa-cogs"></i></spna>${car.trans}
                  </p>
                  <p>
                    <spna><i class="fas fa-gas-pump"></i></spna>${car.gas}
                  </p>
                </div>
              </div>
            </div>
            <!-- !end single car -->`
        })

        inventory.innerHTML = data;
    })
})(creatCars);

const filter = (() => {
    let filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();

            let value = e.target.dataset.filter;
            let allCars = document.querySelectorAll('.single-car');
            allCars.forEach(car => {
                if (value === 'all') {
                    car.style.display = 'block';
                } else {
                    (!car.classList.contains(value)) ? car.style.display = 'none': car.style.display = 'block';
                }
            })
        })
    })
})();

document.querySelectorAll('.blankLink').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        // console.log('click');
    })
});