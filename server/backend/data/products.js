const products = [
  {
    name: "To Kill a Mockingbird",
    imageUrl:
      "https://images.unsplash.com/photo-1529655683826-bd7e49a58b48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "Harper Lee's Pulitzer Prize-winning novel is a timeless story of racial injustice and childhood innocence in the American South. Set in the 1930s, the story is told through the eyes of Scout Finch, a young girl whose father, Atticus Finch, is defending a black man accused of raping a white woman.",
    price: 15.99,
    countInStock: 30,
  },
  {
    name: "1984",
    imageUrl:
      "https://images.unsplash.com/photo-1587815070442-e0d85b92b8b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "George Orwell's dystopian masterpiece, 1984, is a haunting tale of totalitarianism, surveillance, and censorship. The novel explores a society where Big Brother is always watching, and individuality is crushed under the weight of oppressive government control.",
    price: 12.99,
    countInStock: 20,
  },
  {
    name: "The Catcher in the Rye",
    imageUrl:
      "https://images.unsplash.com/photo-1551029506-080e6a41c06b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "J.D. Salinger's classic novel follows the experiences of Holden Caulfield, a disenchanted teenager who roams New York City after being expelled from his prep school. The story is a profound critique of society's expectations and the loss of innocence.",
    price: 10.99,
    countInStock: 15,
  },
  {
    name: "The Great Gatsby",
    imageUrl:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "F. Scott Fitzgerald's The Great Gatsby is a tragic love story and a scathing critique of the American Dream. Set in the Roaring Twenties, it follows the mysterious Jay Gatsby's obsessive quest to reunite with his lost love, Daisy Buchanan.",
    price: 14.99,
    countInStock: 25,
  },
  {
    name: "Moby Dick",
    imageUrl:
      "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Herman Melville's Moby Dick is a seafaring adventure and a profound exploration of obsession, vengeance, and humanity's place in the universe. The novel tells the story of Captain Ahab's relentless pursuit of the elusive white whale, Moby Dick.",
    price: 18.99,
    countInStock: 10,
  },
  {
    name: "Pride and Prejudice",
    imageUrl:
      "https://images.unsplash.com/photo-1598908319881-f95a5c173de6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "Jane Austen's Pride and Prejudice is a beloved romantic comedy that explores the manners and matrimonial machinations among the British gentry of the early 19th century. The story centers on the spirited Elizabeth Bennet and her complex relationship with the brooding Mr. Darcy.",
    price: 11.99,
    countInStock: 18,
  },
  {
    name: "War and Peace",
    imageUrl:
      "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Leo Tolstoy's War and Peace is a sweeping narrative that delves into the lives of several aristocratic families during the Napoleonic Wars. This monumental novel is celebrated for its rich characterization, complex structure, and its profound examination of history and human nature.",
    price: 19.99,
    countInStock: 12,
  },
  {
    name: "Crime and Punishment",
    imageUrl:
      "https://images.unsplash.com/photo-1579123034161-3e4939c1d9f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "Fyodor Dostoevsky's Crime and Punishment is a psychological thriller that delves into the mind of Rodion Raskolnikov, a young law student who commits a murder in an attempt to prove his theory that extraordinary people have the right to commit crimes if it benefits humanity.",
    price: 16.99,
    countInStock: 20,
  },
  {
    name: "The Brothers Karamazov",
    imageUrl:
      "https://images.unsplash.com/photo-1529655683826-bd7e49a58b48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "Dostoevsky's The Brothers Karamazov is a complex novel that explores faith, doubt, free will, and the existence of God. The story revolves around the moral struggles of the Karamazov family, particularly the three brothers: Dmitri, Ivan, and Alexei.",
    price: 17.99,
    countInStock: 14,
  },
  {
    name: "Jane Eyre",
    imageUrl:
      "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Charlotte Brontë's Jane Eyre is a passionate love story and a profound exploration of social class, sexuality, religion, and the position of women in the early 19th century. The novel follows the emotions and experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester.",
    price: 13.99,
    countInStock: 22,
  },
  {
    name: "The Hobbit",
    imageUrl:
      "https://images.unsplash.com/photo-1529655683826-bd7e49a58b48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "J.R.R. Tolkien's The Hobbit is a fantasy novel that follows the adventures of Bilbo Baggins, a hobbit who is thrust into a quest to reclaim a treasure guarded by the dragon Smaug. The story is set in the world of Middle-earth and is a precursor to The Lord of the Rings.",
    price: 14.99,
    countInStock: 28,
  },
];

module.exports = products;
