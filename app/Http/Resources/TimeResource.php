<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class TimeResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'time' => $this->time,

        ];
    }

}
