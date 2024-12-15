function GeneralInformation() {
  return (
    <main className='flex-1 flex flex-col'>
        <form>
          <div className='md:flex mb-8'>
            <div className='md:w-1/3'>
              <legend className='uppercase tracking-wide text-xs font-bold'>
                Location
              </legend>
              <p className='text-xs font-light text-red'>
                This entire section is required.
              </p>
            </div>
            <div className='md:flex-1 mt-2 mb:mt-0 md:px-3'>
              <div className='mb-4'>
                <label className='block uppercase tracking-wide text-xs font-bold'>
                  Name
                </label>
                <input
                  className='w-full shadow-inner p-4 border border-black'
                  type='text'
                  name='name'
                  placeholder='Acme Mfg. Co.'
                />
              </div>
              <div className='md:flex mb-4'>
                <div className='md:flex-1 md:pr-3'>
                  <label className='block uppercase tracking-wide text-charcoal-darker text-xs font-bold'>
                    Street Address
                  </label>
                  <input
                    className='w-full shadow-inner p-4  border border-black'
                    type='text'
                    name='address_street'
                    placeholder='555 Roadrunner Lane'
                  />
                </div>
                <div className='md:flex-1 md:pl-3'>
                  <label className='block uppercase tracking-wide text-charcoal-darker text-xs font-bold'>
                    Building/Suite No.
                  </label>
                  <input
                    className='w-full shadow-inner p-4 border border-black'
                    type='text'
                    name='address_number'
                    placeholder='#3'
                  />
                  <span className='text-xs mb-4 font-thin'>
                    We lied, this isn't required.
                  </span>
                </div>
              </div>
              <div className='md:flex mb-4'>
                <div className='md:flex-1 md:pr-3'>
                  <label className='block uppercase tracking-wide text-charcoal-darker text-xs font-bold'>
                    Latitude
                  </label>
                  <input
                    className='w-full shadow-inner p-4 border border-black'
                    type='text'
                    name='lat'
                    placeholder='30.0455542'
                  />
                </div>
                <div className='md:flex-1 md:pl-3'>
                  <label className='block uppercase tracking-wide text-charcoal-darker text-xs font-bold'>
                    Longitude
                  </label>
                  <input
                    className='w-full shadow-inner p-4 border border-black'
                    type='text'
                    name='lon'
                    placeholder='-99.1405168'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='md:flex mb-8'>
            <div className='md:w-1/3'>
              <legend className='uppercase tracking-wide text-sm'>
                Contact
              </legend>
            </div>
            <div className='md:flex-1 mt-2 mb:mt-0 md:px-3'>
              <div className='mb-4'>
                <label className='block uppercase tracking-wide text-xs font-bold'>
                  Phone
                </label>
                <input
                  className='w-full shadow-inner p-4 border border-black'
                  type='tel'
                  name='phone'
                  placeholder='(555) 555-5555'
                />
              </div>
              <div className='mb-4'>
                <label className='block uppercase tracking-wide text-charcoal-darker text-xs font-bold'>
                  URL
                </label>
                <input
                  className='w-full shadow-inner p-4 border border-black'
                  type='url'
                  name='url'
                  placeholder='acme.co'
                />
              </div>
              <div className='mb-4'>
                <label className='block uppercase tracking-wide text-charcoal-darker text-xs font-bold'>
                  Email
                </label>
                <input
                  className='w-full shadow-inner p-4 border border-black'
                  type='email'
                  name='email'
                  placeholder='contact@acme.co'
                />
              </div>
            </div>
          </div>
          
          <div className='md:flex mb-6'>
            <div className='md:w-1/3'>
              <legend className='uppercase tracking-wide text-sm'>
                Description
              </legend>
            </div>
            <div className='md:flex-1 mt-2 mb:mt-0 md:px-3'>
              <textarea
                className='w-full shadow-inner p-4 border border-black'
                placeholder='We build fine acmes.'
                rows={6}
              ></textarea>
            </div>
          </div>
        </form>
    </main>
  );
}

export default GeneralInformation;
