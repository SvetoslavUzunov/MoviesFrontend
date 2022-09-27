import IndividualMovie from './IndividualMovie';
import moviesListProps from './moviesListProps';
import css from './MoviesList.module.css';
import GenericList from '../utils/GenericList';

const MoviesList = (props: moviesListProps) => {

    return <GenericList list={props.movies}>
        <div className={css.div}>
            {props.movies?.map(movie =>
                <IndividualMovie {...movie} key={movie.id} />
            )}
        </div>
    </GenericList>
}

export default MoviesList;