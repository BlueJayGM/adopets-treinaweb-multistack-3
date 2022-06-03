import type { NextPage } from 'next';
import ListContainer from '../ui/components/List/List.component';
import TitleContainer from '../ui/components/Title/Title.component';

const Home: NextPage = () => {
  return (
    <div>
      <TitleContainer title='' 
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br/>
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        } 
      />
      <ListContainer  pets={ [
        {
          id: 1,
          name: 'Bidu',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Provident perspiciatis vel, doloremque sunt enim nulla, quasi ad quae iste architecto, 
          neque et dignissimos maxime. Quibusdam modi accusamus sunt itaque optio?`,
          image_url: 'https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png'
        },
        {
          id: 2,
          name: 'Shambu',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Provident perspiciatis vel, doloremque sunt enim nulla, quasi ad quae iste architecto, 
          neque et dignissimos maxime. Quibusdam modi accusamus sunt itaque optio?`,
          image_url: 'https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-2.png'
        }
      ] }/>
    </div>
  )
}

export default Home;
