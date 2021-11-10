package models

type Endpoint struct {
	Id int `json:"id" example:"1"`
	Url string  `json:"url" example:"10"`
	Label string `json:"label" example:"10"`
	Method string  `json:"method" example:"10"`
	BearerAuth string  `json:"bearer_auth" example:"10"`
	Body string  `json:"body" example:"10"`
	Expected ExpectedResult  `json:"expected" example:"10"`

}

type ExpectedResult struct {
	StatusCode string  `json:"status_code" example:"10"`
	Response string  `json:"response" example:"10"`
}