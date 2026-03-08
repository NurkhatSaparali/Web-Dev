import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductCard } from '../product-card/product-card'
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Xiaomi Redmi Note 14',
      description: 'Smartphone Xiaomi Redmi Note 14 Pro 8 Gb/256 Gb',
      price: 155939,
      rating: 5,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p65/p99/45808873.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pb9/p99/45808876.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy A35',
      description: 'Smartphone 5G 8 Gb/128 Gb',
      price: 155569,
      rating: 5,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hef/h7f/85428859699230.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hde/h03/85428859764766.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/ha2/hdf/85428859502622.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-goluboi-117420525/?c=750000000'
    },
    {
      id: 3,
      name: 'iPhone 13',
      description: 'Smartphone Apple 4Gb/128Gb',
      price: 478328 ,
      rating: 5,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hef/h7f/85428859699230.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'
    },
    {
      id: 4,
      name: 'iPhone 14',
      description: 'Smartphone Apple 6Gb/128Gb',
      price: 368370 ,
      rating: 5,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/ha8/h64/86042949713950.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h52/h99/86042949812254.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000'
    },
    {
      id: 5,
      name: 'Samsung Galaxy A56',
      description: 'Smartphone Samsung Galaxy A56 8Gb/256Gb',
      price: 208377 ,
      rating: 5,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p40/pe8/30496109.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pc9/pea/30496111.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p55/peb/30496116.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-serebristyi-136420120/?c=750000000'
    },
    {
      id: 6,
      name: 'iPhone 15',
      description: 'Smartphone Apple 6Gb/128Gb',
      price: 391085  ,
      rating: 5,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p40/pe8/30496109.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pc9/pea/30496111.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p55/peb/30496116.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000'
    },
    {
      id: 7,
      name: 'iPhone 17',
      description: 'Smartphone Apple 8Gb/256Gb',
      price: 594900 ,
      rating: 5,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p14/pa5/64165039.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p54/pa2/64165043.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p70/pa2/64165042.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-chernyi-145466647/?c=750000000'
    },
    {
      id: 8,
      name: 'Poco X7 Pro',
      description: 'Smartphone Poco X7 Pro 12Gb/512Gb ',
      price: 245876,
      rating: 5,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p05/p6a/67021874.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pe1/p22/19792402.jpeg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pdb/p85/19792410.jpeg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/poco-x7-pro-12-gb-512-gb-chernyi-133345346/?c=750000000'
    },
    {
      id: 9,
      name: 'OPPO Reno13 F',
      description: 'Smartphone OPPO Reno13 F 8Gb/256Gb ',
      price: 171986,
      rating: 5,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/paa/pae/23266043.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pc6/pae/23266044.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pe2/pae/23266045.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/oppo-reno13-f-8-gb-256-gb-fioletovyi-134251479/?c=750000000'
    },
    {
      id: 10,
      name: 'Samsung Galaxy A36',
      description: 'Samsung Galaxy A36 8Gb/128Gb White',
      price: 146944,
      rating: 5,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p44/p84/30557260.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p28/p84/30557261.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pd3/p83/30557264.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a36-5g-8-gb-128-gb-belyi-136436225/?c=750000000'
    },
  ]
}