import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        description: 'Takimata justo consetetur justo sadipscing no, rebum ut sed ea justo rebum magna eirmod, dolore eos invidunt lorem justo voluptua..',
        price: 10,
        favorite: false,
        ingredients: ['salt', 'pepperoni', 'cheese', 'tomato', 'basil'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        description: 'Takimata justo consetetur justo sadipscing no, rebum ut sed ea justo rebum magna eirmod, dolore eos invidunt lorem justo voluptua..',
        favorite: true,
        ingredients: ['salt', 'meat', 'cheese', 'tomato'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        description: 'Takimata justo consetetur justo sadipscing no, rebum ut sed ea justo rebum magna eirmod, dolore eos invidunt lorem justo voluptua..',
        favorite: false,
        ingredients: ['salt', 'meat', 'cheese', 'tomato'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        description: 'Takimata justo consetetur justo sadipscing no, rebum ut sed ea justo rebum magna eirmod, dolore eos invidunt lorem justo voluptua..',
        favorite: true,
        ingredients: ['potatoes', 'salt', 'pepper', 'cheese', 'tomato', 'basil', 'onion', 'garlic'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        description: 'Takimata justo consetetur justo sadipscing no, rebum ut sed ea justo rebum magna eirmod, dolore eos invidunt lorem justo voluptua..',
        favorite: false,
        ingredients: ['salt', 'meat', 'cheese', 'tomato'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        description: 'Takimata justo consetetur justo sadipscing no, rebum ut sed ea justo rebum magna eirmod, dolore eos invidunt lorem justo voluptua..',
        favorite: false,
        ingredients: ['salt', 'pepperoni', 'cheese', 'tomato', 'basil', 'onion', 'garlic'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }
}
