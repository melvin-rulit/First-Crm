<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;

/**
 * @method static create(array $all)
 */
class Order extends Model
{
    use Filterable;


    protected $fillable = [
       'id',
       'orderid',
        'nameus',
        'tel',
        'town',
        'adress',
        'racion',
        'total',
        'pay',
        'deliv',
        'comment',
        'datetimes',
        'date_delivery',
        'end_Date',
        'start_edit',
        'created_at',
        'type_id',

    ];

//    public $timestamps = false;
    protected $dates = [
        'created_at',
    ];

    public function type()
    {
//        return $this->hasOne('App\Models\Type', Type::class);
//        return $this->belongsTo('App\Models\Type', 'type_id');
        return $this->hasMany('App\Models\Type', 'type_id');
//        return $this->belongsToMany('App\Models\Type', 'type' , 'type_id');
    }

}