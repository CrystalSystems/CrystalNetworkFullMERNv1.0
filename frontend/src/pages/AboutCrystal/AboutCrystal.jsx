import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./AboutCrystal.module.css";
export function AboutCrystal() {
  const { i18n } = useTranslation();
  return (
    <div className={styles.about_crystal}>
      {i18n.language === "ru" ? (
        <>
          <h1>О CRYSTAL</h1>
          <p>
            CRYSTAL - это социальная сеть с открытым исходным <a href="https://github.com/CrystalSystems" target="_blank" rel="noopener" aria-label="ссылка на исходный код CRYSTAL">кодом</a>, находящаяся в стадии разработки. Постепенно будут появляться новые функции: личные сообщения, комментарии, фото/видео альбомы, поиск и т.д. На заключительных этапах разработки, будут добавлены уникальные возможности, которых нет в других социальных сетях.
          </p>
          <p>
            Следите за проектом и оставляйте коммментарии в <Link
              to={"https://discord.com/invite/ENB7RbxVZE"}
              target="_blank"
              rel="noreferrer"
            >discord</Link> и <Link
              to={"https://t.me/AndrewShedovChat"}
              target="_blank"
              rel="noreferrer"
            >telegram</Link>.
          </p>
        </>
      ) : (
        <>
          <h1>About CRYSTAL</h1>
          <p>
            CRYSTAL - is an <a href="https://github.com/CrystalSystems" target="_blank" rel="noopener" aria-label="link to crystal source code">open source</a> social network under development. New functions will gradually appear: personal messages, comments, photo/video albums, search, etc. At the final stages of development, unique features that are not available in other social networks will be added.
          </p>
          <p>
            Follow the project and leave comments on <Link
              to={"https://discord.com/invite/ENB7RbxVZE"}
              target="_blank"
              rel="noreferrer"
            >discord</Link> and <Link
              to={"https://t.me/AndrewShedovChat"}
              target="_blank"
              rel="noreferrer"
            >telegram</Link>.
          </p>
        </>
      )}
    </div>
  );
};
