<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property mixed id
 * @property mixed access
 */
class AccessAllResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nameus' => $this->nameus,
            'kurer' => $this->kurer,
            'orderid' => $this->orderid,
            'adress' => $this->adress,
            'tel' => $this->tel,
            'status' => $this->status,
            'racion' => $this->racion,
            'deliv' => $this->deliv,
            'total' => $this->total,
            'pay' => $this->pay,
            'start_edit' => $this->start_edit,
            'type_zakaz' => $this->type_zakaz,
            'datetimes' =>  Carbon::createFromDate($this->datetimes)->format('d.m.Y'),
            'date_delivery' =>  $this->date_delivery ? Carbon::createFromDate($this->date_delivery)->format('d-m-Y') : '',
            'end_Date' =>   Carbon::createFromDate($this->end_Date)->format('d.m.Y') ,
            'start_date_Period' =>   Carbon::createFromDate($this->start_date_Period)->format('m/d/Y') ,
            'end_date_Period' =>   Carbon::createFromDate($this->end_date_Period)->format('m/d/Y') ,
            'array' =>   json_decode($this->array, true, 100, 0),
        ];
    }
}
