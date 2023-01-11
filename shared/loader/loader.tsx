import { LoaderStyled } from './loader.styled';

type LoaderProps = {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({className = ''}) =>
  <LoaderStyled className={`icon-spin ${className}`} />

export default Loader;
