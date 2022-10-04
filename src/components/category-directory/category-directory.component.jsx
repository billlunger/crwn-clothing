import './category-directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';
let directory = require('./category-directory.json');

const CategoryDirectory = () => {
  return (
    <div className='categories-container'>
      {directory.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
