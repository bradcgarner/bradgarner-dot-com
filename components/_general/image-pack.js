import ImageContainer from "./image-container";

export default function ImagePack(props){
	const list = Array.isArray(props.list) ?
		props.list : [];
		
	return <div className='image-pack-container'>
		{
			list.map((i,j)=>{
				return <div key={j} className='single-image-in-pack'>
				  <ImageContainer
					src           ={i.src}
					alt           ={i.alt}
					caption       ={i.caption} 
					containerStyle={i.containerStyle}
          imageStyle    ={i.imageStyle}/>
				</div>
			})
		}
		<style jsx>{`
		  .image-pack-container {
				flex-wrap: wrap;
				align-self: center;
				justify-content: space-between;
			}
		  .single-image-in-pack {
				width: 100%;
				max-width: 100%;
			}
			@media (min-width: 600px){
				.single-image-in-pack {
					max-width: 49%;
				}
			}
		`}</style>
	</div>
}