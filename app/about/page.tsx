const page = () => {
  return (
    <main className="font-poppins text-text container mx-auto px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8">
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="font-iceberg text-3xl font-bold sm:text-4xl lg:text-5xl">
          Welcome to my About Page
        </h1>
        <p className="text-muted mt-4 font-normal sm:text-lg">
          This is my about page. I am a software engineer and I love to code.
        </p>
      </div>
    </main>
  );
};

export default page;
