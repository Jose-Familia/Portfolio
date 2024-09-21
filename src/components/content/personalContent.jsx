import React from 'react';

const PersonalContent = () => (
  <>
    <h2 className="font-semibold text-2xl mb-4">Personal</h2>
    <p className="mb-4">
      On a personal note, I am a big fan of comics, movies, reading, and anime, and I believe it is good to have a balance between the things we like and our aspirations.
    </p>
    <p className="mb-4">
      I like learning new things and for this reason I decided to learn web development, and along the way I have tried several technologies such as Typescript, Golang and Rust, they are very fun technologies to use and they are valid for many areas of programming; and some web frameworks such as Next.js or Astro.
    </p>
    <blockquote className="italic text-gray-600 dark:text-gray-400 my-4">
      It is exciting everything you can do with programming. 🤍
    </blockquote>
    <address className="not-italic">
      Santo Domingo, Dominican Republic
    </address>
  </>
);

export default PersonalContent;