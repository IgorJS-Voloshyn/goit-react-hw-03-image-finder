import { Grid } from 'react-loader-spinner';

export function Loader() {
  return (
    <Grid
      height="80"
      width="80"
      color="#73e6ff"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
