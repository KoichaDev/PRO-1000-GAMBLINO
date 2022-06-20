import create from "zustand";

const useImageStore = create((set) => ({
    type: "",
    width: 0,
    height: 0,
    btnDimensionClicked: false,
    numberControlClicked: false,
    setWidth: (value) => set(() => ({ width: value })),
    setHeight: (value) => set({ height: value }),
    setImageType: (value) => set(() => ({ type: value })),
    setBtnDimensionClicked: (value) => {
        return set(() => ({ btnDimensionClicked: value }));
    },
    setNumberControlClicked: (value) => {
        return set(() => ({ numberControlClicked: value }));
    },
}));

export default useImageStore;
