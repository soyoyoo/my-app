import { getImageUrl } from './util';
function Profile({name, imageId, size, profession, awards, discovered}) {
  return (
    <>
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageId)}
          alt={name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b>
            ({awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered} polonium (chemical element)
          </li>
        </ul>
      </section>
    </>
  )
}
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile size={70}
          name='Katsuko Saruhashi'
          imageId = 'YfeOqp2'
        profession = 'geochemist'
        awards = {['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discovered = 'a method for measuring carbon dioxide in seawater'
      
      />
      
      <Profile
        size={70}
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="physicist and chemist"
        awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
        discovered="polonium (chemical element)"
      />
    </div>
  );
}
