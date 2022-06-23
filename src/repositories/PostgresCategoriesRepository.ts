import { Category } from "../model/Category";
import { ICategoryRepository, ICreateCategoryDto } from "./ICategoriesRepository";


class PostgresCategoriesRepository implements ICategoryRepository{
    findByName(name: string): Category {
        throw new Error("Method not implemented.");
    }
    getCategories(): Category[] {
        throw new Error("Method not implemented.");
    }
    create({name, description}: ICreateCategoryDto): void {
        throw new Error("Method not implemented.");
    }
    
}