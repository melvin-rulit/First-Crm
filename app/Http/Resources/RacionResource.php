<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class RacionResource extends JsonResource
{
    public function toArray($request)

    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'itog_otchet' => $this->itog_otchet,
        ];
    }
}



