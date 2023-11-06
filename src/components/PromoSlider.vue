<script>
import axios from "axios";

export default {
	data() {
		return {
			slidePromoList: [],
			currentSlide: 0, // counter slide
			cardsForSlide: 3, // quantità di cards per slide
			movingCard: false,
		};
	},
	computed: {
		// Calcola le card visibili in base all'indice corrente e al numero di card da dover mostrare
		visibleSlide() {
			// Creo l'indice di inizio e fine del range di carte da mostrare
			const start = this.currentSlide;
			const end = start + this.cardsForSlide;

			// Verifico se l'array contiene almeno 3 elementi
			if (this.slidePromoList.length < this.cardsForSlide) {
				return this.slidePromoList;
			} else {

				// Se si è raggiunta la fine dell'array, riporto l'indice "currentSlide" a 0 e ritorno le prime carte dell'array
				if (start >= this.slidePromoList.length) {
					this.currentSlide = 0;
					return this.slidePromoList.slice(0, this.cardsForSlide);
				}

				// Se sono nei limiti dell'array, ritorno il range di carte tra l'indice di inizio e quello di fine
				if (end <= this.slidePromoList.length) {
					return this.slidePromoList.slice(start, end);
				}

				// Individuo le due porzioni di array da mostrare
				const firstPart = this.slidePromoList.slice(start); // dall'indice "start" fino alla fine dell'array			
				const secondPart = this.slidePromoList.slice(0, end - this.slidePromoList.length); // dall'inizio dell'array fino all'indice "end" sottraendo la sua lunghezza

				// Restituisco le due parti concatenate
				return firstPart.concat(secondPart);
			}
		},
	},
	methods: {
		fetchData(url) {
			axios.get(url).then((response) => {
				this.slidePromoList = response.data.apartments;
			});
		},
		getApartmentThumbnail(apartment) {
			return `http://127.0.0.1:8000/storage/${apartment.thumbnail}`;
		},
		onNextClick() {
			this.movingCard = true;
			this.currentSlide++;
			// Rimuovo la classe di animazione
			setTimeout(() => {
				this.movingCard = false;
			}, 300);
		},
		onPrevClick() {
			this.movingCard = true;
			this.currentSlide--;
			if (this.currentSlide < 0) {
				this.currentSlide = this.slidePromoList.length - 1; // Per tornare all'ultima slide
			}
			setTimeout(() => {
				this.movingCard = false;
			}, 300);
		},
	},
	mounted() {
		this.fetchData('http://127.0.0.1:8000/api/apartments/');
	},
}
</script>

<template>
	<div class="container pt-2 pb-4">
		<h2 class="pb-2">Le nostre migliori strutture</h2>
		<!-- Sezione carosello per dispositivi più grandi di 769px -->
		<div class="slider-container">
			<div class="promo-slider-box">
				<div class="row row-cols-1 row-cols-md-3 gy-4 justify-content-center">
					<div v-for="(card, i) in visibleSlide" :key="i" class="col">
						<div class="card h-100" :class="{ 'slide-active': movingCard }">
							<img :src="getApartmentThumbnail(card)" class="card-img-top" :alt="card.title">
							<div class="card-body">
								<div class="d-flex align-items-start justify-content-between">
									<h5 class="card-title">{{ card.title }}</h5>
								</div>
								<p class="card-text">{{ card.city }}</p>
								<p class="card-text">{{ card.address }}</p>
								<!-- Servizi -->
								<p class="card-text mb-0 pb-0 fw-bold">Servizi inclusi:</p>
								<ul>
									<li class="card-text" v-for="(service, z) in card.services" :key="z">
										{{ service.title }}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<!-- Pulsanti di navigazione -->
				<div class="prev text-center" @click="onPrevClick">
					<button type="button" class="btn btn-primary">
						<i class="fa-solid fa-chevron-left"></i>
					</button>
				</div>
				<div class="next text-center" @click="onNextClick">
					<button type="button" class="btn btn-primary">
						<i class="fa-solid fa-chevron-right"></i>
					</button>
				</div>
			</div>
		</div>

		<!-- Sezione card per dispositivi più piccoli di 769px -->
		<div class="card-container">
			<div class="row row-cols-1 row-cols-md-3 gy-4 justify-content-center">
				<div v-for="(card, i) in slidePromoList" :key="i" class="col">
					<div class="card">
						<img :src="card.img" class="card-img-top" :alt="card.title">
						<div class="card-body">
							<div class="d-flex align-items-start justify-content-between">
								<h5 class="card-title">{{ card.title }}</h5>
							</div>
							<p class="card-text">{{ card.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.card {
	opacity: 1;
	border-color: $primary-color;
	background-color: $primary-color;
	cursor: pointer;
	transition: all .5s;

	img {
		transition: all .5s;
		height: 200px;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}

	h5 {
		color: $secondary-color;
	}

	p {
		color: $partial-primary-color;
	}

	&:hover {
		transform: translateY(-2%);
		box-shadow: 2px 2px 10px 0px rgb(0, 0, 0, .1);

		img {
			filter: brightness(.8);
		}
	}
}

.slide-active {
	opacity: 0.4;
}

.promo-slider-box {
	position: relative;

	.prev {
		position: absolute;
		top: 50%;
		left: -60px;
		transform: translate(-50%, -50%);
	}

	.next {
		position: absolute;
		top: 50%;
		right: -90px;
		transform: translate(-50%, -50%);
	}
}

.slider-container {
	display: none;
}

.card-container {
	display: block;
}

@media (min-width: 769px) {
	.slider-container {
		display: block;
	}

	.card-container {
		display: none;
	}
}
</style>