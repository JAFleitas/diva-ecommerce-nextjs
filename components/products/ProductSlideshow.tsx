import { FC } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"
import styles from "./style/productSlideshow.module.css";
interface Props {
  images: string[];
}

export const ProductSlideshow: FC<Props> = ({ images }) => {
  return (
    <Slide easing="ease" duration={7000} indicators>
      {images.map((image) => {
        const url = `/products/${image}`;
        return (
          <div key={image} className={styles["each-slide"]}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
  );
};
