export const currencyTableColumns = [
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
    width: 100
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price"
  },
  {
    title: "Favourites",
    dataIndex: "saved",
    key: "saved",
    width: 150,
    sorter: (a, b) => {
      if (a.saved && !b.saved) {
        return -1;
      } else if (!a.saved && b.saved) {
        return 1;
      } else {
        return 0;
      }
    },
    sortOrder: "ascend"
  }
];
