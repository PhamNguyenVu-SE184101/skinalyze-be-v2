import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * GHN Status Update Webhook DTO
 * Based on GHN API webhook documentation
 */
export class GhnStatusWebhookDto {
  @ApiProperty({
    description: 'GHN order tracking code',
    example: 'GHN123456789',
  })
  @IsString()
  OrderCode: string;

  @ApiProperty({
    description: 'Current order status from GHN',
    example: 'delivering',
    enum: [
      'ready_to_pick',
      'picking',
      'money_collect_picking',
      'picked',
      'storing',
      'sorting',
      'transporting',
      'delivering',
      'money_collect_delivering',
      'delivered',
      'cancel',
      'delivery_fail',
      'waiting_to_return',
      'return',
      'return_transporting',
      'return_sorting',
      'returning',
      'return_fail',
      'returned',
    ],
  })
  @IsString()
  Status: string;

  @ApiPropertyOptional({
    description: 'Human-readable status in Vietnamese',
    example: 'Đang giao hàng',
  })
  @IsOptional()
  @IsString()
  StatusText?: string;

  @ApiPropertyOptional({
    description: 'Timestamp of status change (ISO 8601)',
    example: '2025-12-13T10:30:00Z',
  })
  @IsOptional()
  @IsDateString()
  Time?: string;

  @ApiPropertyOptional({
    description: 'Package weight in grams',
    example: 500,
  })
  @IsOptional()
  @IsNumber()
  Weight?: number;

  @ApiPropertyOptional({
    description: 'Shipping fee in VND',
    example: 25000,
  })
  @IsOptional()
  @IsNumber()
  Fee?: number;

  @ApiPropertyOptional({
    description: 'Delivery note from GHN',
    example: 'Giao hàng thành công',
  })
  @IsOptional()
  @IsString()
  Note?: string;

  @ApiPropertyOptional({
    description: 'COD amount to collect in VND',
    example: 500000,
  })
  @IsOptional()
  @IsNumber()
  CODAmount?: number;

  @ApiPropertyOptional({
    description: 'Expected COD transfer date to merchant',
    example: '2025-12-15',
  })
  @IsOptional()
  @IsString()
  CODTransferDate?: string;

  @ApiPropertyOptional({
    description: 'Shop ID from GHN',
    example: 123456,
  })
  @IsOptional()
  @IsNumber()
  ShopId?: number;

  @ApiPropertyOptional({
    description: 'Client ID from GHN',
    example: 789012,
  })
  @IsOptional()
  @IsNumber()
  ClientId?: number;
}

/**
 * GHN COD Collection Webhook DTO
 */
export class GhnCodWebhookDto {
  @ApiProperty({
    description: 'GHN order tracking code',
    example: 'GHN123456789',
  })
  @IsString()
  OrderCode: string;

  @ApiProperty({
    description: 'COD amount collected in VND',
    example: 500000,
  })
  @IsNumber()
  CODAmount: number;

  @ApiPropertyOptional({
    description: 'Expected transfer date to merchant',
    example: '2025-12-15',
  })
  @IsOptional()
  @IsString()
  CODTransferDate?: string;

  @ApiPropertyOptional({
    description: 'Collection timestamp (ISO 8601)',
    example: '2025-12-13T14:30:00Z',
  })
  @IsOptional()
  @IsDateString()
  Time?: string;

  @ApiPropertyOptional({
    description: 'Shop ID from GHN',
    example: 123456,
  })
  @IsOptional()
  @IsNumber()
  ShopId?: number;

  @ApiPropertyOptional({
    description: 'Transaction reference number',
    example: 'TXN-987654321',
  })
  @IsOptional()
  @IsString()
  TransactionId?: string;
}
