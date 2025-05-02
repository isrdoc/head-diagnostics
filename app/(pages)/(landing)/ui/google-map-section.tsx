"use client";

export function GoogleMapSection() {
  return (
    <section className="max-w-page-wider mx-auto w-full h-[400px] md:h-[500px] bg-gray-100 flex items-center justify-center">
      <div className="w-full h-full">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87189.44137316909!2d-6.307117664883033!3d53.30489964850411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670ff6d8d24aa7%3A0x28e2cb44e128132f!2sDataships!5e0!3m2!1sen!2suk!4v1746187683391!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
