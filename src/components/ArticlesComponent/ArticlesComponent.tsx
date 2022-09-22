import React from 'react';
import { useGetAllArticlesQuery } from '../../redux/api/articles/articlesApi';
import s from './ArticlesComponent.scss';

interface Article {
  id: number;
  title: string;
  content: string;
}

const ArticlesComponent: React.FC = () => {
  const { data, isLoading, error } = useGetAllArticlesQuery();

  if (!isLoading && !error) {
    return (
      <div className={s.container}>
        {data.map((article: Article) => {
          return (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default ArticlesComponent;
