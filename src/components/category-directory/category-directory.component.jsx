import './category-directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';
let directory = require('./category-directory.json');

const CategoryDirectory = () => {
  return (
    <div className='categories-container'>
      {directory.map(category => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
