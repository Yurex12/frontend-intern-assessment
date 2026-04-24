import { LinkButton } from './LinkButton';

export function BookConsultant() {
  return (
    <section className='px-4 md:px-8 lg:px-16'>
      <div className='w-full max-w-284 mx-auto bg-primary p-10 rounded-sm'>
        <div className='text-center space-y-8 text-background'>
          <div className='hidden lg:block'>
            <h3>
              Want to accelerate professional growth and development at your
              organisation?
            </h3>
            <p>See how we can help.</p>
          </div>

          <div className='lg:hidden'>
            <p>
              Don&apos;t just dream it—let&apos;s build it! Click now and start
              your project with Tobams Group. Your journey to digital excellence
              begins here.
            </p>
          </div>
          <div>
            <LinkButton className='flex items-center justify-center bg-background text-primary mx-auto px-8 py-3'>
              Book a Consultation
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
