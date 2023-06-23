/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "One Piece";

  test('debe de mostrar el "loading" inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText(category));
    expect(screen.getByText("Cargando..."));
  });

  test("debe de mostrar items cuando se cargan las imágenes mediante useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Shallan Davar",
        url: "https://localhost/Shallan.jpg",
      },
      {
        id: "123",
        title: "Dalinar Kholin",
        url: "https://localhost/Dalinar.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
