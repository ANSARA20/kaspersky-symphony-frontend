import Cookies from 'js-cookie';

export const download = async (route: string) => {
  const apiUrl = process.env.API_URL;
  const response = await fetch(`${apiUrl}/${route}/excel`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  });

  if (response.ok) {
    let blobFile = await response.blob();

    const el = document.createElement('a');

    el.href = window.URL.createObjectURL(blobFile);
    el.download = `${route}.xlsx`;
    el.click();
  } else {
    alert('Ошибка скачивания файла, попробуйте позже');
  }
};
