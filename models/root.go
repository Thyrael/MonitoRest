package models

import "time"



type Root struct{
	CreatedAt time.Time  `json:"created_at" example:"10"`
	DebounceTime string  `json:"debounce_time" example:"10"`
	Labels []string `json:"labels" example:"10"`
	Endpoints []Endpoint  `json:"endpoints" example:"10"`
}