import { useEffect, useState } from "react";
import { MenuList } from "./constants";

const Menu = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const [itemsSizeList, setItemSizeList] = useState<number[]>([]);

  useEffect(() => {
    const menuItems = document
      .querySelector(".menu-container")
      ?.querySelectorAll(".menu-item");
    const newList: number[] = [];
    menuItems?.forEach((item) => {
      newList.push(item.clientWidth);
    });
    setItemSizeList([...newList]);
  }, []);

  useEffect(() => {
    const activeBox = document
      .querySelector(".menu-container")
      ?.querySelector(".menu-active-box") as HTMLDivElement;
    if (activeBox) {
      activeBox.style.width = `${itemsSizeList[activeMenuIndex]}px`;
      let sumOfItemsWidth = 0;
      for (let i = 0; i < activeMenuIndex; i++) {
        sumOfItemsWidth += itemsSizeList[i];
      }
      activeBox.style.transform = `translateX(${
        sumOfItemsWidth + (activeMenuIndex) * 4
      }px)`;
    }
  }, [itemsSizeList, activeMenuIndex]);

  const changeMenu = (index: number) => {
    setActiveMenuIndex(index);
  };
  return (
    <div className="p-1 h-full rounded-full bg-[#ffffffcc]">
      <div className="h-full flex items-center gap-x-1 relative menu-container">
        {MenuList.map((item, index) => (
          <div
            className={`px-4 h-full flex items-center text-base cursor-pointer menu-item relative z-20 transition-colors duration-500 ${
              activeMenuIndex === index ? "text-[#ffffff]" : "text-[#111]"
            }`}
            key={item.id}
            onClick={() => {
              changeMenu(index);
            }}
          >
            {item.title}
          </div>
        ))}
        <div className="h-full rounded-full bg-[#222222] menu-active-box absolute z-10 left-0 transition-transform duration-500"></div>
      </div>
    </div>
  );
};

export default Menu;
