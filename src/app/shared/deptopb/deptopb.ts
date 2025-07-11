import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';
import { Modal } from "../modal/modal";

@Component({
  selector: 'app-deptopb',
  imports: [Navbar, Footer, RouterLink, Modal],
  templateUrl: './deptopb.html',
  styleUrl: './deptopb.scss',
})
export class Deptopb {
  imagenes = [
    'https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/299807334_485573720242849_6382961395962598035_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1BoAgTr2is4Q7kNvwFZ4VNd&_nc_oc=Adl5HRE3FLuU_HwGir6S83H5ZVbKp5wpdZgtQnTPTUEV9KTp2E0xQHikr80XdITgkqg&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=g7PDi40Zli7DZzrCcese_g&oh=00_AfQntdhiOKajJqEmJ0oBlQjADTbFdcOYdFQntLmvwDDZzw&oe=6872E5C0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZQ4pR5-SfvJxA4DIMQv8nN-e8wx307K49IjLDq7HZCkqTlV1naN3rXz1LnJiX3Z4n-VorXE53-7sUKJrixEoEuNr96T1Zn0Z-Hm9WpJkHDnjDA7w0PBMZUCBdkBYOvNhQcehVl0BAOEZ0_v87m8a0tAXFWiZd-gS5IydwzcFkhrOTE2O6x_dgpBOr1OEobcvXOO8s-CvrZqd2Eelm4_QNyAq_lryQ8K83fQB6ij3XqgHO6Lz8m0YapJ_B0pfQr-9EECUw3Tqe0k',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCWeHvf-KUsBXCGYb4xuWywa_zxGU93c7koNbLxj0zireB7_5ba_nyI6IGlXKeBPd7ZtVqCOMyEldUbifurX8XBwHCT6K0uzCIWukYdY4lLt4MvumO4Ek3Vu3wj_oLgQRpfY0UV_hB0U2la4Qqe2GfzMyyjkecqI9isBO247U9kqOE7Htv4yxykdrNBm1fne-G8niyfRQB7rrAnK2_EewHvCFSbVGxAHorejcVxENk-KiSseTGtwl0IclS4T8IVoXWH1cuslEkpqec',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDZjXBqkuv0EwrHhULeuwPc-Uni25l1WXuRHkojYbyZJAfGTvsOFATygKHRTq28G-XNYDyJ-mCiSMquU4tCzBRCx5X-DUh4rTpZDSZqXMHkTAo2MU8sVHCIZREaayr__QjKv04OdsrG50x_Je3ngTgyTn1ToaESGy5U2JJwvO86Pz8TS446NapVFP7zdlFjgrwq38pLNe6MLGqveeuH-MnbMi5E50ELz-Dnc6HAjqwSLC_4Di1ZhA3jw4-6v489rPxxhaDiTtKZh14',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCmjj-kqG89xhn9OUoRfkaUsKJ2p77tufhf3uAVkYUb_X8fCQMEuTDrTCaAqZ3oOYiwIyO9aBYQ-ez6V3tJraL-2HB4ijoI5SFD3E4kAQPeMFYTxLVAyK_J55SmT_yMQFpHMq4hvLgQ9i5T1_rdWH-Jo7jK0pZcKQoiKNl_kuVzZZmLsk4G-oZMvNKzUz-7dlSG6eL_OS1Hh7iCMpdJXdmMINY8IQ6-DIgOdiOPSC5DDdDU7PYi6VnvZZnYVnkb2mQjIXNLurojO3A',
  ];
  imagenSeleccionada = this.imagenes[0];
  modalOpen = false;

  openModal(img: string) {
    this.imagenSeleccionada = img;
    this.modalOpen = true;
  }
}
