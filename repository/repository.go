package repository

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"my-project/models"
	"os"
	"time"
)

var fileName = "root.json"

func ReadAll () models.Root {
	jsonFile, err := os.Open(fileName)
  
    if err != nil {
        fmt.Println(err)
    }

    byteValue, _ := ioutil.ReadAll(jsonFile)
	jsonFile.Close()
    var root models.Root

    json.Unmarshal(byteValue, &root)

	return root;
}

func SaveAll (data string) error {

	f, err := os.OpenFile(fileName, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0755)
	
	f.Write([]byte(data))
    if err != nil {
        log.Fatal(err)
    }
    if err := f.Close(); err != nil {
        log.Fatal(err)
    }

	return err;
}

func IsFileExist() error {
	if _, err := os.Stat(fileName); err == nil {
    	return nil
  	} else {
		  t, _ := json.Marshal(models.Root{CreatedAt: time.Now(), DebounceTime: "10", Labels: []string{}, Endpoints: []models.Endpoint{}})
		return SaveAll(string(t))
  	}
}