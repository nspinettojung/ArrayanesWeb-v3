import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Card } from '../../shared/card/card';
import { ICard } from '../../core/interface/i-card';
import { Footer } from "../../shared/footer/footer";

@Component({
  selector: 'dta-home',
  imports: [Navbar, Card, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  cards: ICard[] = [
    {
      imgCard:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB7wHJxqR9Yx9D3W0Eh0OZc5h7ocSKpLSNrMW5SaL4pB1ctZMS4CNG7LmbjxJ0bPM-18Pp_lM1yajJdSCJo2cDymEsntmdc6sa21zqsMQbV-VbiUuhr0tJKrFcUmzG1B31VsPZzNCR_Az7yJ-IB0j6Vy4u1rs5Pm0a6wIcENmFhSK1zM7lUFhbc-fgFUctFtDY414afBpGarI9Ww-aiws3XF6_WTxGOl5Cj7-BGvBNCJTZnGoBdi4pcjgH9ZJ5_WYbPSAGU1-FzPoE',
      tCard: 'Cozy Apartment',
      description: 'A cozy apartment with a fireplace and comfortable seating.',
    },
    {
      imgCard:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBEWwqBqJNWHcGVN1_iSLo7JyzmMinoTCCo9Tkzre0U7Rl6M0kpOf40vOI8hYqNVGmTxZ-E41HUhEBMgHyqACpOnCVufVe38iRVjRrMQi7yxuij_dNY6TENdkJlEYmdFpgJQGyQdbml4SQPxX0QgIW0ltsaBsF6rRF4s4QH8_MaZdaNlvdzm6Q9d64mT423sM-gqtOOJnpKMQ0ilXYwh9-GGpEYJepFLmi9oy0qD6JKemy6tJWzzH3zBZeeVWHNbX7aBNyJzDqWrwg',
      tCard: 'Cozy Apartment',
      description: 'A cozy apartment with a fireplace and comfortable seating.',
    },
    {
      imgCard:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCeqyF7xDcsZ5gFRcqCgOHhgR2iUS4wxUEhv84yr6ZErWfF9ihrrFMPOkjnhBGs_pRIhnAJzO10MMfdR8HSpV4ysuQfI5XQbp6DKjaspVvWnNvCnpcrmPBc8HzdgAezBzzSR4n9f4_EGtxsBrRXqN0BVvWsg1UcRWj96d4DRCHeOrUhBqo1Qxx8koYzLpl84C5W2AmH0gd1r5IH0Zfd_Cla2fAl2xMNJx0MLtDi5dQyxSpS5U_bQQsAfDR7mAUyCht2L2eAQGcONnw',
      tCard: 'Cozy Apartment',
      description: 'A cozy apartment with a fireplace and comfortable seating.',
    },
  ];

  cardsT: ICard[] = [
    {
      imgCard:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA15k35kut3lB-TUl3JXtCq7G_gIQepzt3eVhBZ55KgsLWgmhmwSAXAhUXYPFfuL822qM3jHSUggQBtpiXAAJw56bZeFakeYDPmYqRBePjS8MksVwKO83ytLoPyxRna44jYGyFpkhCtS3UVTLB0N3EwQUI70i1bRjcCkrjlca7mu4ZKkXtzFlT4U3e56bKqmT-RUOAlquSK_PdY9smue3s8jhrT-eAvCFbOuVL4reEZfQC6q4DS-DOtADhxvvUkM-EhtBm9eF7aovg',
      tCard: 'Cozy Apartment',
      description: 'A cozy apartment with a fireplace and comfortable seating.',
    },
    {
      imgCard:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDpHbdIEK1X0GKnM_TZND9P4gx2EHPMF5FVxv5h5iId5AkBXp-hZRxLbcv64k_JKA80RtrF2RYryUSRG2HPItbOSjsI2M13NwVzQTMOM57ExA6p9kPIKfgJWMDbsAJ1lO7s3k7C5kmuxgDGwQX0ATxqkyl1K6DJMKfX_R2fp47LkpmJUKWYupsNt4IQ8LOlIYi-gEDjYTLi1_xSCd6Nf5ZStaNkOM9CH3xdFPCv9b_xhuulBSiYUpaqeBf64PLcOQGHOpaTab9nnTY',
      tCard: 'Modern Apartment',
      description:
        'A modern apartment with a fully equipped kitchen and stylish design',
    },
  ];
}
