import { PageLayout } from "../Layout/PageLayout";

interface Props {
  heading: string;
}

export const Page: React.FC<Props> = ({ heading }) => {
  return (
    <PageLayout>
      <h1 className='text-2xl text-grays-dark'>{heading}</h1>
    </PageLayout>
  );
};
