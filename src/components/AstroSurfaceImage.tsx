

const AstroSurfaceImage = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div>
        <img src={imgSrc} alt="astro-surface" style={{ height: '100px', width: '100px' }}/>
    </div>
  )
}

export default AstroSurfaceImage