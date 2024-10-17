function BackGroundProfile() {
    return ( 
        <section className='relative block h-[500px]'>
          <div
            className='absolute top-0 w-full h-full bg-center bg-cover'
            style={{
              backgroundImage:
                'url(https://i.pinimg.com/originals/ea/ac/14/eaac14a4468e6615382250cc3a0a1c35.jpg)',
            }}
          >
            <span
              id='blackOverlay'
              className='w-full h-full absolute opacity-50 bg-black'
            ></span>
          </div>
        </section>
     );
}

export default BackGroundProfile;