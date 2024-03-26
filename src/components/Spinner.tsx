import { ClipLoader } from 'react-spinners';

type SpinnerProps = {
  loading: boolean;
};

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = (props: SpinnerProps) => {
  const { loading } = props;
  return (
    <ClipLoader
      color='#4338ca'
      cssOverride={override}
      loading={loading}
      size={150}
      aria-label='Loading Spinner'
    />
  );
};

export default Spinner;
