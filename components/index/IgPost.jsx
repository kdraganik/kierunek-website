import InstagramEmbedPost from 'react-instagram-embed';

export default function IgPost({link}){

  return(
    <InstagramEmbedPost
      url={link}
      hideCaption={true}
      containerTagName='div'
    />
  )
}