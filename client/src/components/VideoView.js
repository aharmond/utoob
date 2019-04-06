import React from 'react'
import { Image } from 'semantic-ui-react';

const logo = 'https://resources-live.sketch.cloud/files/0c691bf6-95ea-4f35-ad3e-46e842eefe7b.png?Expires=1554685200&Signature=mCOAD2p5sijiSsM4HWpafP-cQs4TRHAouci4hZ3tLuXuA~Rs1Fqe8qYhPw3PvbOg2~vl0hr98Uy3ElhQY5~cO9wXDPzYtAR0lrlBZoFTBFmEkK6Qc8LuZfloXO8sT~b-bmR9xhm1v0mGDwIhJABaOqlq6xbKgBGyjfc-0CVJRXE_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA'

class VideoView extends React.Component {
  render() {
    return (
      <>
        <Image src={logo} size='small' />
      </>
    )
  }
}

export default VideoView