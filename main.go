package main

import (
	_ "embed"
	"my-project/models"
	"my-project/repository"

	"github.com/wailsapp/wails"
)


func save(data string) {
  _ = repository.SaveAll(data)
}

func read() models.Root {
  return repository.ReadAll()
}

//go:embed frontend/build/static/js/main.js
var js string

//go:embed frontend/build/static/css/main.css
var css string

func main() {

  app := wails.CreateApp(&wails.AppConfig{
    Width:  1024,
    Height: 768,
    Title:  "My Project",
    JS:     js,
    CSS:    css,
    Colour: "#131313",
  })

  _ = repository.IsFileExist()

  app.Bind(save)
  app.Bind(read)
  app.Run()

}
