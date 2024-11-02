import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import Thumbnail from '../images/thumbnail.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
        <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={'/posts/werwer/edit'} className="btn sm primary">Edit</Link>
            <Link to={'/posts/werwer/delete'} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="Thumbanil" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aspernatur voluptas eum accusamus odio! Nam modi ullam, doloribus harum fugiat laboriosam qui cum at voluptas dolores delectus quasi, excepturi tempora fuga debitis praesentium magni, assumenda ut omnis accusamus! Minima, odio.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, eaque corporis! Nihil inventore consequuntur dolorum impedit. Illum culpa dolorum aliquid corrupti, quasi soluta magni maxime neque at! Temporibus, deleniti adipisci. Veniam tenetur ipsam doloribus esse quae ipsum repellendus animi! Enim molestiae perspiciatis a rem ipsa. Nulla quisquam quos officiis quis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, non rem illo praesentium hic quae aliquam eaque dolore veritatis atque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non ratione, dignissimos natus saepe, et laudantium voluptatem nihil magnam, placeat voluptatum modi totam. Voluptatem quidem debitis fuga voluptates. In, nostrum nihil. Error voluptas necessitatibus accusantium maxime fugiat assumenda doloribus quam ullam tenetur consequatur sint veritatis quisquam eveniet voluptates perspiciatis commodi, asperiores eum. Praesentium nulla labore nostrum dolore ad similique officiis excepturi libero, veniam fugiat sunt optio suscipit debitis quisquam sequi est ipsa cum fuga dolorem iusto consequuntur id hic quos! Alias excepturi voluptatem natus incidunt exercitationem. Asperiores reprehenderit in dolorem ea ullam nemo sequi quasi explicabo corrupti quia sed, eligendi id aliquam nisi reiciendis exercitationem dolorum maxime? Nam, pariatur. Quos voluptas dignissimos, possimus architecto sit provident quisquam atque quidem odit perferendis minus iusto qui consequuntur maiores ab, corporis nesciunt enim ipsum incidunt illo ad sequi dolorem accusamus impedit. Alias quam labore, mollitia nulla modi placeat recusandae facilis! Quas beatae illum corrupti perferendis eius quod doloremque mollitia veniam quo quasi ex nesciunt neque laboriosam quia natus totam, laborum tempore, repellendus vitae dolores. Quasi debitis velit dignissimos non ea dolorem odit quas laborum et. Illo asperiores, esse perferendis facilis vel soluta a. Fugiat quidem impedit eius consequatur possimus mollitia unde, expedita sit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid necessitatibus, numquam asperiores voluptatibus distinctio eveniet debitis hic dolor amet veniam maxime, earum labore tempore corporis? Sed obcaecati assumenda adipisci! Ipsum commodi eaque quidem corporis animi officia minus nisi veniam cupiditate recusandae alias natus aut perspiciatis quo accusantium soluta obcaecati doloremque placeat autem explicabo, expedita maxime? Culpa illo quaerat itaque ea tempora voluptatum eos dignissimos atque voluptates eum ex facere libero in veritatis nobis autem sit rerum amet iste, accusantium accusamus blanditiis. Eaque delectus maiores rem culpa vel ducimus alias fuga necessitatibus perferendis incidunt vitae quod totam voluptatibus consequuntur reprehenderit odit, sit numquam ad natus debitis obcaecati, similique, aut autem? Voluptatem dolor, obcaecati, assumenda possimus sit dolore fugiat temporibus ullam optio reprehenderit dicta minus saepe, asperiores laborum culpa atque officia odit id voluptatibus. Dolor doloribus veritatis adipisci quam dolorum sit sint ad et illo eligendi, earum nam, ea explicabo inventore corporis. Molestias dicta non unde nam iure. Veritatis fugiat laboriosam optio atque esse. Hic, laboriosam qui perferendis aliquam nam at maxime autem dolorum perspiciatis, saepe veritatis laborum cupiditate deleniti. Sit, nisi. Qui nesciunt vel maiores explicabo saepe officia voluptates repellendus quam quae esse numquam libero vitae nihil, reprehenderit voluptas quaerat deserunt illum recusandae ipsa repudiandae ipsam cum veniam architecto possimus. Sunt recusandae assumenda cumque eligendi sit, cum facilis officiis dolore incidunt consectetur, deserunt saepe aperiam earum quas iste blanditiis libero ipsa veniam beatae tempora corrupti mollitia sint ad sequi. Obcaecati distinctio praesentium soluta reprehenderit incidunt nemo, temporibus deserunt voluptates earum consequuntur, eos laudantium magni alias omnis corporis saepe molestias consequatur optio tempora doloremque recusandae? Error, cupiditate velit corrupti quod modi quo repudiandae obcaecati, aspernatur itaque eius, autem libero reprehenderit expedita ab! Facilis quae, aliquid tempora excepturi totam eos quo temporibus facere accusamus! Porro expedita aspernatur ipsam ab adipisci, doloribus reprehenderit numquam! Dolores maxime, minus voluptatem distinctio facere beatae officiis doloribus culpa fugiat facilis delectus repellendus quaerat doloremque, assumenda sapiente sunt corrupti ducimus. Possimus omnis ipsum, perspiciatis minus molestias sit, temporibus rerum, fugiat voluptatibus aut illo neque minima. Numquam dolorem hic esse, rerum molestiae, possimus deleniti nemo consequatur, ab pariatur velit nulla sint maiores ex atque voluptatibus quo quod? Quam, dolore omnis eveniet laboriosam eos et fugiat aspernatur numquam quia ipsum, pariatur ullam eius velit magni soluta amet corporis, rerum officiis aperiam iure libero quibusdam! Voluptatem, earum minima similique eligendi, quis incidunt asperiores labore odit dolorem in ducimus quia? Quas, ad porro.
        </p>
      </div>
    </section>
  
  )
}

export default PostDetail