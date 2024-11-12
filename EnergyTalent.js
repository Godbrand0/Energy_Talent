// Image paths and alternative text
const images = [
  { src: "assets/arabic.jpeg", alt: "female freelancer" },
  { src: "assets/corperate.jpeg", alt: "corporate professional" },
  { src: "assets/chinese.jpeg", alt: "male engineer" },
  { src: "assets/construction.jpg", alt: "female construction worker" },
  { src: "assets/american.jpeg", alt: "female accountant" },
  { src: "assets/freelancer.png", alt: "freelancer" },
  { src: "assets/mexican.jpeg", alt: "mexican mechanic" },
  { src: "assets/representative.jpg", alt: "representative" },
];

// Reference to the slider element
const slider = document.getElementById("slider");

// Duplicate the images array to create a seamless scroll effect
const allImages = images.concat(images);

// Render the images
allImages.forEach((image, index) => {
  const imgElement = document.createElement("img");
  imgElement.src = image.src;
  imgElement.alt = image.alt;
  imgElement.classList.add(
    "lg:w-56",
    "w-[350px]",
    "h-[250px]",
    "object-cover",
    "rounded-xl",
    "lg:h-44",
    "mx-2"
  );
  slider.appendChild(imgElement);
});

// Scroll effect
let scrollAmount = 0;

function scrollSlider() {
  scrollAmount += 1; // Adjust to control speed
  slider.style.transform = `translateX(${-scrollAmount}px)`;

  // Reset scroll position for seamless scroll
  if (scrollAmount >= slider.scrollWidth / 2) {
    scrollAmount = 0;
  }

  requestAnimationFrame(scrollSlider);
}

scrollSlider();
