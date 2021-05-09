import React, { useEffect, useState } from 'react';
import LayoutStyle from '../../layout/LayoutStyle';
import axios from 'axios';
import { Row } from 'antd';
import { MainStyle, ProductList } from './style';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // let body = {};

    axios.post('api/product/products').then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setProducts(response.data.productInfo);
      } else {
        alert('상품 목록을 가져오지 못 했습니다.');
      }
    });
  }, []);

  const renderList = products.map((prod, index) => {
    return (
      <ProductList key={index}>
        <div className="items">
          <ImageSlider images={prod.images} />
          <div className="description">
            <strong>{prod.title}</strong>
            <p>{prod.price}원</p>
          </div>
        </div>
      </ProductList>
    );
  });

  return (
    <LayoutStyle>
      <MainStyle>
        <h1>~상품 목록~</h1>
        <div>
          {/* 필터 */}
          {/* 검색 */}
          {/* 목록 */}
          <Row>{renderList}</Row>
        </div>
      </MainStyle>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum libero vel neque dolore.
      Aliquam soluta blanditiis modi nostrum vero fuga minus, in quae, provident dignissimos sequi
      pariatur consequatur ad amet laudantium totam quod eos alias repellat voluptatem voluptas
      nesciunt rerum vel dolorum. Sapiente, repudiandae tempore assumenda maiores odio, laborum modi
      consequuntur ad corrupti deleniti nobis tempora repellat nam necessitatibus amet, quasi iste.
      Voluptates sed ex voluptatem perferendis asperiores voluptas molestiae maiores quam provident
      dolore, illo veritatis repudiandae consequatur dolorem mollitia dolorum repellendus eum sequi
      facere ea ab. Eveniet laborum quia minus, illo exercitationem accusamus. Culpa, incidunt nemo
      omnis nesciunt nisi vero quae dicta minima eum at voluptas ad excepturi quidem aliquid,
      expedita alias officia beatae nostrum nihil quos veniam exercitationem delectus sed. Et
      asperiores quaerat ratione ab, veritatis amet commodi iste nobis consectetur quis ea cum
      incidunt atque reprehenderit totam sapiente unde iure molestiae. Nemo, dolore modi. Explicabo
      doloribus facilis temporibus neque totam, aliquam, quae itaque pariatur iure eligendi cum,
      quod odio ipsum dicta! Mollitia facilis similique in sequi iure inventore suscipit, harum aut
      laudantium modi error magni debitis ipsa illum deserunt laboriosam architecto libero tempore?
      Itaque totam molestiae, obcaecati impedit tempora magni, quam consectetur facere vel delectus
      vitae hic! Magnam doloribus commodi natus pariatur iure sapiente, quaerat accusantium
      deleniti. Enim ratione dolores voluptas dolorum, quibusdam ipsum error expedita fugit debitis.
      Distinctio, quod? Possimus, fugit. Dicta doloribus voluptatem similique cupiditate aliquam at
      nam eligendi modi numquam quis esse eius saepe impedit omnis explicabo laudantium sed hic
      eveniet quam, quod harum quas. Aut deserunt dolores, quo repudiandae, aperiam ipsum,
      perferendis totam voluptatum cumque debitis nostrum impedit quaerat suscipit id dolore fugit.
      Inventore natus repellendus dignissimos magni modi voluptas cum beatae, recusandae
      voluptatibus! Laboriosam autem esse exercitationem architecto nobis similique fugit
      perferendis velit omnis? Nisi modi similique, laborum quas rerum sed maiores omnis illum,
      iusto necessitatibus architecto expedita harum eius quibusdam fuga nulla neque rem
      perspiciatis. Debitis velit ex nemo praesentium, officia repellat mollitia vero veritatis
      eveniet asperiores quas, libero dolorem earum tempora commodi architecto tempore natus omnis
      voluptate placeat? Iusto, possimus. Porro doloremque beatae incidunt molestiae dolor atque
      repellendus! Optio eligendi odio, eius debitis vero, sequi eum consectetur, perferendis
      aliquid veritatis molestias saepe magni quidem error! Atque doloribus qui aliquam illum
      perferendis voluptatibus, enim officia mollitia nostrum ad. Enim sunt dolor, accusantium cum
      sequi voluptatibus. Itaque quas harum minus possimus ex dolores, mollitia blanditiis ipsam
      vero corporis velit consectetur atque provident earum nihil reiciendis repellendus officiis.
      Saepe consequatur recusandae at iure consectetur quod cupiditate, eum optio ad vitae dolor ex,
      ipsam ratione sequi corrupti praesentium voluptates laborum beatae laudantium voluptas
      excepturi tempora magnam similique. Veniam nam quos vero deleniti non similique sed, ipsam
      possimus sequi nemo aspernatur! Eligendi cupiditate perspiciatis dolore quia, doloremque ullam
      tenetur. Laborum sequi tempore repellat. Temporibus odit ab placeat corrupti atque quo ullam
      necessitatibus et, qui, unde, aspernatur dolore doloremque laboriosam dolores voluptatum harum
      ut maxime saepe dolorum esse. Saepe expedita officiis numquam accusantium officia porro? Ad
      iure dicta, quaerat repellendus alias molestiae blanditiis quo aut minima autem repudiandae
      ipsum, error quas ducimus minus consequuntur tempora beatae fugit tenetur laborum. Ex
      asperiores temporibus qui perspiciatis veritatis officiis eveniet suscipit vel amet, accusamus
      esse facere officia inventore fuga delectus atque iste nemo distinctio quibusdam reiciendis
      harum laboriosam? Esse perferendis cum non vero nihil ea quo quasi alias sit. Ducimus
      molestias officiis in laboriosam aliquam totam aliquid eos laudantium atque consectetur non
      eveniet tempora magni soluta, animi corrupti, optio quam vero cupiditate id quasi
      exercitationem iusto eligendi officia! Perspiciatis id tenetur quisquam odio magnam, esse nisi
      aliquam, aperiam corrupti maxime delectus omnis fuga eveniet repellendus eligendi iste numquam
      dolor alias at. Soluta quam ea labore ducimus officiis accusantium repellat modi veritatis
      praesentium aperiam a inventore iure, quidem doloremque sit quo. Totam, facilis. Placeat
      dolores est numquam recusandae at aut ab ipsum molestiae deserunt cum veritatis possimus
      reprehenderit nesciunt excepturi voluptatem voluptatum aperiam, delectus quibusdam,
      voluptatibus obcaecati sit aliquid! Similique minima nihil libero dolorum iste non repellendus
      sint tenetur quibusdam dicta! Aut fugiat repellendus molestiae vitae nostrum ad omnis labore
      voluptas assumenda hic nesciunt quia itaque illum, dolorum, iure a atque mollitia fugit
      perferendis, inventore ipsam. Repellendus placeat excepturi quidem assumenda recusandae est
      magnam corporis consequatur quaerat dolor amet soluta distinctio tempora earum ea nostrum quos
      error, nemo natus eligendi reiciendis veritatis consequuntur alias deleniti? Sed illum
      reprehenderit repellat autem harum. Harum, maiores. Tempore ipsa necessitatibus qui placeat
      sit ea, vero vel, deserunt sapiente sed consectetur dolore porro. Veritatis ad, deleniti
      quasi, est iure rerum consectetur hic animi expedita velit vel labore dolor sequi quo a,
      commodi voluptatibus vitae cum. Quod deserunt id nobis porro? Ratione hic fugit laborum eum
      culpa dolorem modi ad, sint accusamus facilis temporibus atque? Atque repellendus maxime rem,
      dicta fugit illum necessitatibus hic, modi quam cumque laborum dolore dolorem debitis adipisci
      voluptate! Et minus voluptates animi consequuntur nobis quos dolorum reiciendis esse eos,
      quibusdam, sed dolor? Natus eligendi unde laborum doloribus veniam deleniti odit illo facere
      qui, corporis placeat error autem porro molestiae saepe fugiat, dignissimos repudiandae velit,
      quo consectetur laudantium accusantium ut incidunt rerum? Quod mollitia praesentium, tenetur
      atque, deleniti inventore, repudiandae quasi id et est repellendus recusandae nulla dolorum
      doloribus magnam velit vero facilis cupiditate voluptatem eaque? Sunt ea reprehenderit id
      beatae earum quam asperiores sit debitis quo error explicabo fugiat corporis voluptatum
      impedit molestiae quasi nostrum quisquam ad, inventore sapiente eaque incidunt in placeat!
      Esse eum quae vitae, aut ea earum fuga. Necessitatibus earum molestiae harum cum aut
      perferendis at et numquam sit quasi illum aliquid, eum placeat nobis, culpa dolore eos
      architecto neque libero ex. Beatae repudiandae unde vel qui quam laudantium, ea sint iste
      voluptatum! Vel esse dignissimos harum rerum? Sequi, in architecto. Consectetur incidunt
      nostrum ipsam, voluptate eligendi laboriosam illum, quisquam laudantium tempore similique a
      rerum, deleniti enim? Assumenda officia natus pariatur odio voluptatum vel sapiente ratione
      voluptatem dignissimos minus quos animi dicta itaque delectus nam commodi quod ut odit,
      laborum temporibus cumque suscipit magnam ullam eum. Beatae expedita voluptatem earum eveniet
      velit sed consequuntur facere quos obcaecati ex.
    </LayoutStyle>
  );
};

export default MainPage;
